require 'rails_helper'

RSpec.describe Admin::PoisController, type: :controller do
  let(:user) { create(:user, user_type: "customer") }
  let(:admin) { create(:user, user_type: "admin") }

  before do
    allow(controller).to receive(:current_user).and_return(current_user)
  end

  describe "GET #all_pois" do
    context "with valid params" do
      let(:current_user) { admin }
      
      before do
        get :all_pois
      end

      it "returns a success response" do
          expect(response).to have_http_status :ok
      end
    end
  end

  describe "POST #create_poi" do
    context "with valid params" do
      let(:valid_attributes) {
        {
          description: "A poi",
          features: ["feature1", "feature2"],
          latitude: 50,
          likes: 100,
          location: "location",
          longitude: 4,
          name: "testname"
        }
      }

      let(:current_user) { admin }

      it "creates a new Poi" do
        expect {
          post :create_poi, params: { poi: valid_attributes }
        }.to change(Poi, :count).by(1)
      end
    end

    context "with invalid longitude" do
      let(:invalid_attributes) {
        {
          description: "A poi",
          features: ["feature1", "feature2"],
          latitude: 80,
          likes: 10,
          location: "location",
          longitude: 200,
          name: "testname"
        }
      }

      let(:current_user) { admin }

      it "does not create a new Poi" do
        expect {
          post :create_poi, params: { poi: invalid_attributes }
        }.to change(Poi, :count).by(0)
      end
    end

    context "with invalid latitude" do
      let(:invalid_attributes) {
        {
          description: "A poi",
          features: ["feature1", "feature2"],
          latitude: 100,
          likes: 10,
          location: "location",
          longitude: 100,
          name: "testname"
        }
      }
      
      let(:current_user) { admin }

      it "does not create a new Poi" do
        expect {
          post :create_poi, params: { poi: invalid_attributes }
        }.to change(Poi, :count).by(0)
      end
    end

    context "with too short name length" do
      let(:invalid_attributes) {
        {
          description: "A poi",
          features: ["feature1", "feature2"],
          latitude: 100,
          likes: 10,
          location: "location",
          longitude: 100,
          name: "As"
        }
      }
      
      let(:current_user) { admin }

      it "does not create a new Poi" do
        expect {
          post :create_poi, params: { poi: invalid_attributes }
        }.to change(Poi, :count).by(0)
      end
    end

    context "with invalid name regex" do
      let(:invalid_attributes) {
        {
          description: "A poi",
          features: ["feature1", "feature2"],
          latitude: 100,
          likes: 10,
          location: "location",
          longitude: 100,
          name: "As,sd.s"
        }
      }
      
      let(:current_user) { admin }

      it "does not create a new Poi" do
        expect {
          post :create_poi, params: { poi: invalid_attributes }
        }.to change(Poi, :count).by(0)
      end
    end
  end

  describe "PUT #edit_poi" do
    context "with valid params" do
      let(:valid_attributes) {
        {
          description: "A poi",
          features: ["feature1", "feature2"],
          latitude: 50,
          likes: 100,
          location: "location",
          longitude: 4,
          name: "test"
        }
      }
      let(:new_attributes) {
        {
          description: "A poinew",
          features: ["feature1", "feature23"],
          latitude: 54,
          likes: 1002,
          location: "testloc2",
          longitude: 77,
          name: "test2"
        }
      }

      let(:current_user) { admin }

      it "updates the requested poi" do
        poi = Poi.create! valid_attributes
        put :edit_poi, params: { id: poi.to_param, poi: new_attributes }
        poi.reload
        expect(poi.description).to eq(new_attributes[:description])
        expect(poi.features).to eq(new_attributes[:features])
        expect(poi.latitude).to eq(new_attributes[:latitude])
        expect(poi.likes).to eq(new_attributes[:likes])
        expect(poi.location).to eq(new_attributes[:location])
        expect(poi.longitude).to eq(new_attributes[:longitude])
        expect(poi.name).to eq(new_attributes[:name])
      end
    end
    context "with invalid params" do
    
    end
  end
end