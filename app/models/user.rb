class User < ApplicationRecord
  has_secure_password
  has_one_attached :profilePhoto
  has_many :linkposts
  has_many :textposts
  
  # validates :username, presence: true, uniqueness: true
  # validates :email, presence: true, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # validates :password, length: { minimum: 6 }
end
