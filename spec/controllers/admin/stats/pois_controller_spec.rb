require 'rails_helper'

RSpec.describe Admin::Stats::PoisController, type: :controller do
  let(:app_visit) { create(:app_visit, email: 'test@example.com', viewed_pois: [poi.id]) }
  let(:poi) { create(:poi) }

  before do
    allow(controller).to receive(:authorize_admin_controllers).and_return(true)
  end

  describe '#all' do
    before do
      app_visit.viewed_pois << poi.id
      get :all
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    it 'returns correct json response' do
      json_response = JSON.parse(response.body)
      expect(json_response['email_grouped']).to_not be_empty
      expect(json_response['session_id_grouped']).to_not be_empty
      expect(json_response['pois_grouped_with_duplicates']).to_not be_empty
      expect(json_response['app_visit_grouped']).to_not be_empty
    end
  end
end