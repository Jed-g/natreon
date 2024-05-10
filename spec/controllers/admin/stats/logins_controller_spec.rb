
require 'rails_helper'

RSpec.describe Admin::Stats::LoginsController, type: :controller do
  let(:admin) { create(:user, user_type: "admin") }
  let!(:app_visits) { create_list(:app_visit, 3) }

  before do
    allow(controller).to receive(:current_user).and_return(admin)
  end

  describe 'GET #all' do
    it 'returns http success' do
      get :all
      expect(response).to have_http_status(:success)
    end

    it 'returns all app visits' do
      get :all
      expect(JSON.parse(response.body).size).to eq(app_visits.count)
    end

    it 'returns the correct structure' do
      get :all
      json_response = JSON.parse(response.body).first
      expect(json_response.keys).to contain_exactly("id", "session_id", "email", "country", "ip_address",
                                                    "time_spent_seconds", "created_at", "latitude", "longitude")
    end
  end
end