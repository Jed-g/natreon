
require 'rails_helper'

RSpec.describe Customer::FavouritePoisController do
    let(:user) { create(:user, user_type: "customer") }
    let(:poi) { create(:poi) }

    before do
        allow(controller).to receive(:current_user).and_return(current_user)
    end

    describe '#all' do
        context "with valid params" do
            let(:current_user) { user }
            let(:poi1) { create(:poi) }
            let(:poi2) { create(:poi) }

            it 'returns all favourite pois of the user' do
                get :all
                expect(response).to have_http_status(:success)
            end

            it 'returns all favourite pois of the user' do
                user.favourites.create(poi: poi1)
                user.favourites.create(poi: poi2)
                get :all
                expect(response).to have_http_status(:success)
                expect(JSON.parse(response.body).map { |poi| poi['id'] }).to match_array([poi1.id, poi2.id])
            end

            it 'returns an empty array if the user has no favourite pois' do
                get :all
                expect(JSON.parse(response.body)).to eq([])
            end
        end
        context "when the user is invalid" do
            let(:current_user) { nil }
            it 'returns an unauthorized response' do
                get :all
                expect(response).to have_http_status(:unauthorized)
            end
        end
    end

    describe '#single_poi_favourite_status' do
        context "with valid params" do
            let(:current_user) { user }
        
            it 'returns the favourite status of a single poi' do
                get :single_poi_favourite_status, params: { poi_id: poi.id }
                expect(response).to have_http_status(:success)
            end
        
            it 'returns true if the poi is a favourite of the user' do
                user.favourites.create(poi: poi)
                get :single_poi_favourite_status, params: { poi_id: poi.id }
                expect(JSON.parse(response.body)).to be true
            end
        
            it 'returns false if the poi is not a favourite of the user' do
                get :single_poi_favourite_status, params: { poi_id: poi.id }
                expect(JSON.parse(response.body)).to be false
            end
        end
        context "with invalid params" do
            let(:current_user) { user }
            it 'returns a bad request status' do
                get :single_poi_favourite_status, params: { poi_id: nil }
                expect(response).to have_http_status(:bad_request)
            end
        end
    end

    describe '#add' do
        context "with valid params" do
            let(:current_user) { user }
            
            it 'adds a poi to the user favourites' do
                post :add, params: { poi_id: poi.id }
                expect(response).to have_http_status(:success)
                expect(user.favourites.exists?(poi: poi)).to be true
            end

            it 'does not add the same poi twice' do
                post :add, params: { poi_id: poi.id }
                post :add, params: { poi_id: poi.id }
                expect(user.favourites.where(poi: poi).count).to eq(1)
            end
        end
        context "with invalid params" do
            let(:current_user) { user }
            it 'if poi id is nil it returns a bad request status' do
                post :add, params: { poi_id: nil }
                expect(response).to have_http_status(:bad_request)
              
            end

            it 'if poi doesnt exist it raises an ActiveRecord error' do
                expect {
                    post :add, params: { poi_id: 'doesnt exist' }
                }.to raise_error(ActiveRecord::RecordNotFound)
            end
        end
    end

    describe '#remove' do
        context "with valid params" do
            let(:current_user) { user }
        
            it 'removes a poi from the user favourites' do
                user.favourites.create(poi: poi)
                delete :remove, params: { poi_id: poi.id }
                expect(response).to have_http_status(:success)
                expect(user.favourites.exists?(poi: poi)).to be false
            end
        
            it 'fails if the poi is not a favourite' do
                delete :remove, params: { poi_id: poi.id }
                expect(response).to have_http_status(:internal_server_error)
            end
        end
        
        context "with invalid params" do
            let(:current_user) { nil }
        
            it 'returns an unauthorised status' do
                delete :remove, params: { poi_id: nil }
                expect(response).to have_http_status(:unauthorized)
            end
            
        end
    end
end