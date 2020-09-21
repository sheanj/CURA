class User < ApplicationRecord
  # include ActiveStorageSupport:SupportForBase64

  has_secure_password
  has_one_attached :profilePhoto 
    # validates :profilePhoto, content_type: [:png, :jpeg, :jpg, :gif]
  has_many :linkposts
  has_many :textposts

  # validates :username, presence: true, uniqueness: true
  # validates :email, presence: true, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # validates :password, length: { minimum: 6 }
end
