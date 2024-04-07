require 'rails_helper'

RSpec.describe Admin::PoisController, type: :controller do
    let(:valid_attributes) {
        { name: 'Test POI', description: 'Test Description', location: 'Test Location', features: 'Test Features', likes: 0, latitude: 0.0, longitude: 0.0 }
    }

    describe "GET #index" do
        it "returns a success response" do
            poi = Poi.create! valid_attributes
            get :index, params: {}
            expect(response).to be_successful
        end
    end

    describe "POST #create_poi" do
        context "with valid params" do
            it "creates a new Poi" do
                expect {
                    post :create_poi, params: { poi: valid_attributes }
                }.to change(Poi, :count).by(1)
            end
        end
    end
end