from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    favorite = db.relationship("favorite", secondary=Guest_Favorite)
    

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

Guest_Favorite = db.Table("association",
    db.Column("user_id", db.Integer, db.ForeignKey("user.id"), primary_key=True),
    db.Column("favorites_id", db.Integer, db.ForeignKey("favorites.id"), primary_key=True)
)

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    drink_id = db.Column(db.String(120), unique=True, nullable=False)
    drink_name = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=False, )
    user = db.relationship("User", secondary=Guest_Favorite)

    def __repr__(self):
        return f'<Favorite {self.drink_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "drink_id": self.drink_id,
            "user_id":  self.user_id,
            "drink_name": self.drink_name,
            # "shoppinglist_id": self.shoppinglist_id
            # do not serialize the password, its a security breach
        }



class   Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    drink_id = db.Column(db.String(120), unique=True, nullable=False)
    drink_name = db.Column(db.String(120), unique=False, nullable=False)
    ingredient_name = db.Column(db.String(120), unique=False, nullable=False)
    is_done = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Ingredient {self.ingredient_name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "drink_id": self.drink_id,
            "drink_name": self.drink_name,
            "ingredient_name": self.ingredient_name,
            "is_done": self.is_done,

            # "shoppinglist_id": self.shoppinglist_id
            # do not serialize the password, its a security breach
        }

