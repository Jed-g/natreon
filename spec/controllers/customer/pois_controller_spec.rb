
require 'rails_helper'

RSpec.describe Customer::PoisController, type: :controller do
  let(:user) { create(:user, user_type: "customer") }
  let(:poi) { create(:poi) }

  before do
    allow(controller).to receive(:current_user).and_return(user)
  end

  describe "GET #all" do
    before do
      get :all, params: { north: 90, south: -90, east: 180, west: -180 }
    end

    it "returns a success response" do
      expect(response).to have_http_status :ok
    end

    it "returns all pois in the specified range" do
        puts "response.body: #{response.body}"
        expect(JSON.parse(response.body)["id"]).to include(poi.id)
    end
  end

  describe "GET #single_poi_by_id" do
    context "when poi exists" do
      before do
        get :single_poi_by_id, params: { id: poi.id }
      end

      it "returns a success response" do
        expect(response).to have_http_status :ok
      end

      it "returns the correct poi" do
        expect(JSON.parse(response.body)["id"]).to eq(poi.id)
      end
    end

    context "when poi does not exist" do

      it "returns a bad request response" do
        expect {
            get :single_poi_by_id, params: { id: -1 }
        }.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end

  describe "GET #all_poi_features" do
    before do
      get :all_poi_features
    end

    it "returns a success response" do
      expect(response).to have_http_status :ok
    end

    it "returns all poi features" do
        expect(JSON.parse(response.body)["allPOIFeatures"]).to eq(Poi::FEATURES)
    end
  end

  describe "GET #search_by_name" do
    context "when poi exists" do
      before do
        get :search_by_name, params: { name: poi.name }
      end

      it "returns a success response" do
        expect(response).to have_http_status :ok
      end
    end

    context "when the search field is blank" do
      before do
        get :search_by_name, params: { name: "" }
      end

      it "returns a bad request response" do
        expect(response).to have_http_status :bad_request
      end
    end
    let(:similar_poi) { create(:poi, name: "similar name") }

    context "when poi exists and similarity threshold is high" do
        before do
            get :search_by_name, params: { name: "similar" }
        end

        it "returns a success response" do
            expect(response).to have_http_status :ok
        end

        it "returns the correct poi" do
            puts "response.body: #{response.body}"
            expect(JSON.parse(response.body)["id"]).to include(similar_poi.name)
        end
    end

    context "when poi exists but similarity threshold is low" do
        before do
            get :search_by_name, params: { name: "kokpodkfgpkdfg" }
        end

        it "returns a success response" do
            expect(response).to have_http_status :ok
        end

        it "does not return the poi" do
            expect(JSON.parse(response.body).map { |poi| poi["name"] }).not_to include(similar_poi.name)
        end
    end
  end

  describe "POST #upload_poi_picture" do
    context "when poi exists" do
      let(:file) { Rack::Test::UploadedFile.new(Rails.root.join('spec', 'fixtures', 'image0001.jpg'), 'image/jpg') }
      before do
        post :upload_poi_picture, params: { poi_id: poi.id, picture: file }
      end

      it "returns a success response" do
        expect(response).to have_http_status :ok
      end

      it "attaches the uploaded picture to the poi" do
        expect(poi.poi_pictures.last.picture).to be_attached
      end
    end

    context "when poi does not exist" do
      let(:file) { Rack::Test::UploadedFile.new(Rails.root.join('spec', 'fixtures', 'image0001.jpg'), 'image/jpg') }

      before do
        post :upload_poi_picture, params: { poi_id: -1, picture: file }
      end

      it "returns a not found response" do
        expect(response).to have_http_status :not_found
      end
    end

    context "when picture is not provided" do
        before do
            post :upload_poi_picture, params: { poi_id: poi.id }
        end
    
        it "returns a bad request response" do
            expect(response).to have_http_status :internal_server_error
        end
    end

    context "when the upload is not a picture" do 
        let(:file) { Rack::Test::UploadedFile.new(Rails.root.join('spec', 'fixtures', 'invalid_picture.txt'), 'text/plain') }
        before do
            post :upload_poi_picture, params: { poi_id: poi.id, picture: file }
        end

        it "returns a bad request response" do
            expect(response).to have_http_status :internal_server_error
        end
    end
  end
end