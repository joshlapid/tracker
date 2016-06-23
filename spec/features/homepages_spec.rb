require 'rails_helper'

RSpec.feature "Homepages", type: :feature do
  context 'Visiting homepage' do
    Steps 'Visiting homepage' do
      When 'I visit the homepage' do
        visit '/'
      end
      Then 'I should see the option to create a new animal' do
        click_link 'New Animal'
      end
      And 'I should be taken to a page that lets me create a new animal' do
        expect(page).to have_button 'Create Animal'
      end
      Then 'I can fill in animal information' do
        fill_in :'animal[name]', with: 'cat'
        fill_in :'animal[latin_name]', with: 'cattus'
        fill_in :'animal[kingdom]', with: 'Mammal'
      end
      When 'I add the animal to the database' do
        click_button 'Create Animal'
      end
      Then 'the animal actually exists in the database' do
        expect(Animal.all.first.name).to eq 'cat'
      end
      When 'I add more animals to the database and visit the homepage' do
        visit '/'
        click_link 'New Animal'
        fill_in :'animal[name]', with: 'dog'
        fill_in :'animal[latin_name]', with: 'doggus'
        fill_in :'animal[kingdom]', with: 'Mammal'
        click_button 'Create Animal'
        visit '/'
      end
      Then 'I can list out the animals in the database' do
        click_link 'List Animals'
        expect(page).to have_content 'cattus'
        expect(page).to have_content 'doggus'
      end
    end
  end
end
