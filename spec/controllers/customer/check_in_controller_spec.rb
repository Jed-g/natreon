require 'rails_helper'

RSpec.describe Customer::CheckInController do
    let(:user) { create(:user, user_type: "customer") }
    let(:poi) { create(:poi) }

    before do
        allow(controller).to receive(:current_user).and_return(current_user)
    end

    describe '#check_in_candidates' do
        context "with valid params" do
            let(:current_user) { user }


            it 'returns a list of candidates' do
                get :check_in_candidates, params: { latitude: 1.0, longitude: 1.0, accuracy_meters: 100 }
                expect(response).to be_successful
                expect(JSON.parse(response.body)).to be_a(Array)
            end
        end

        context 'when user has already checked into a POI' do
            let(:current_user) { user }
            let(:poi2) { create(:poi) }
          
            it 'does not include the checked-in POI in the response' do
                user.check_ins.create!(poi: poi)
                user.check_ins.create!(poi: poi2)
            
                allow(controller).to receive(:params).and_return(latitude: '1.0', longitude: '1.0', accuracy_meters: '1.0')
            
                get :check_in_candidates
            
                expect(response.body).not_to include(poi2.id.to_s)
            end
        end
    end

    describe '#register_check_in' do
        let(:user) { create(:user) }
        let(:poi) { create(:poi, latitude: 1.0, longitude: 1.0) }

        let(:current_user) { user }

        context 'with valid parameters' do
            it 'creates a new check in' do
                post :register_check_in, params: { poi_id: poi.id, latitude: 1.0, longitude: 1.0, accuracy_meters: 1.0}

                expect(response).to be_successful
                expect(user.check_ins.count).to eq(1)
            end
        end

        context 'when poi_id is not present' do
            it 'renders bad request' do
                post :register_check_in, params: { poi_id: nil }

                expect(response).not_to be_successful
            end
        end

        context 'when poi is outside the threshold distance' do
            let(:current_user) { user }
            let(:distant_poi) { create(:poi, latitude: 80.0, longitude: 100.0) }
        
            it 'returns a failure response' do
                post :register_check_in, params: { poi_id: distant_poi.id, latitude: 1.0, longitude: 1.0, accuracy_meters: 1.0}
                expect(response).not_to be_successful
            end
        end

        context 'when check_in is not persisted' do
            it 'returns an internal server error' do
                allow_any_instance_of(User).to receive_message_chain(:check_ins, :create).and_return(double(persisted?: false))
    
                post :register_check_in, params: { poi_id: poi.id, latitude: 1.0, longitude: 1.0, accuracy_meters: 1.0}
    
                expect(response).to have_http_status(:internal_server_error)
            end
        end
    end

    describe '#all' do
        context "with valid params" do 

            let(:current_user) { user }

            it 'returns all checked in pois' do
                user.check_ins.create(poi: poi)
                get :all
                expect(response).to be_successful
                json_response = JSON.parse(response.body)

                json_response.each do |poi|
                    expect(poi.keys).to include('lngLat', 'name', 'id', 'isFavourite', 'description', 'features', 'likes', 'checkedIn', 'comments')
                end
            end
        end
        context 'when user has checked in at multiple pois' do
            let(:current_user) { user }
            let(:poi2) { create(:poi) }
            let(:poi3) { create(:poi) }

        
            it 'returns all checked in pois for the user' do
                user.check_ins.create(poi: poi)
                user.check_ins.create(poi: poi2)
                user.check_ins.create(poi: poi3)
                get :all
            
                expect(response).to be_successful
            
                json_response = JSON.parse(response.body)
            
                expect(json_response.size).to eq(3)
                json_response.each do |poi|
                    expect(poi.keys).to include('lngLat', 'name', 'id', 'isFavourite', 'description', 'features', 'likes', 'checkedIn', 'comments')
                end
            end
        end
        context 'when user is not authenticated' do
            let(:current_user) { nil }
            it 'returns unauthorized' do
              get :all
        
              expect(response).to have_http_status(:unauthorized)
            end
        end
    end
    describe '#single_poi_check_in_status' do
        let(:current_user) { user }
        let(:poi) { create(:poi) }

        context 'when poi_id is present' do
            it 'returns the check-in status for the poi' do
                current_user.check_ins.create(poi: poi)

                get :single_poi_check_in_status, params: { poi_id: poi.id }

                expect(response).to be_successful
                expect(JSON.parse(response.body)).to be_truthy
            end
        end

        context 'when poi_id is not present' do
            it 'renders bad request' do
                get :single_poi_check_in_status, params: { poi_id: nil }

                expect(response).to have_http_status(:bad_request)
            end
        end

        context 'when poi does not exist' do
            it 'raises an ActiveRecord error' do

                expect {
                    get :single_poi_check_in_status, params: { poi_id: 'doesnt exist' }
                }.to raise_error(ActiveRecord::RecordNotFound)
            end
        end
    end
end