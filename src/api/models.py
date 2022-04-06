from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    favorite_id = db.Column(db.String(80), db.ForeignKey('favorite.id'), unique=True, nullable=False, )
    shoppinglist_id = db.Column(db.String(80), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "favorite_id": self.favorite_id,
            "shoppinglist_id": self.shoppinglist_id
            # do not serialize the password, its a security breach
        }

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    drink_id = db.Column(db.String(120), unique=True, nullable=False)
    user = relationship(User)

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            # "shoppinglist_id": self.shoppinglist_id
            # do not serialize the password, its a security breach
        }

class   shoppinglist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    drink_id = db.Column(db.String(120), unique=True, nullable=False)
    user = relationship(User)

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            # "shoppinglist_id": self.shoppinglist_id
            # do not serialize the password, its a security breach
        }