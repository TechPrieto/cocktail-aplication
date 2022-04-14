"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favorite, Ingredient
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/favorite', methods=['GET'])
def get_favorite():
    
    favorite_query = Favorite.query.all()
    all_favorites = list(map(lambda x: x.serialize(),  favorite_query))
    
    return jsonify(all_favorites), 200

@api.route('/favorite', methods=['POST'])
def post_favorite():
    body = request.json

    favorite = Favorite(drink_id=body['drink_id'], drink_name=body['drink_name'], user_id=body['user_id'] )
    db.session.add(favorite)
    db.session.commit()

    favorites = Favorite.query.all()
    all_favorites= list(map(lambda x: x.serialize(), favorites))
    

    return jsonify(all_favorites), 200

#deberia ser drink_id?
@api.route('/favorite/<int:id>', methods=['DELETE'])
def delete_favorite(id):
    favorite_id = Favorite.query.get(id)
    if favorite_id is None:
        raise APIException('Favorite not found', status_code=404)
   
    db.session.delete(favorite_id)
    db.session.commit()

    favorites = Favorite.query.all()
    all_favorites= list(map(lambda x: x.serialize(), favorites))
    

    return jsonify(all_favorites), 200

@api.route('/shoppinglist', methods=['GET'])
def get_ingredient():
    

    ingredients = Ingredient.query.all()
    all_ingredients= list(map(lambda x: x.serialize(), ingredients))

    return jsonify(all_ingredients), 200


@api.route('/shoppinglist', methods=['POST'])
def post_ingredient():
    body = request.json

    ingredient = Ingredient(drink_id=body['drink_id'], drink_name=body['drink_name'], ingredient_name=body['ingredient_name'], is_done=body['is_done'] )
    db.session.add(ingredient)
    db.session.commit()

    ingredients = Ingredient.query.all()
    all_ingredients= list(map(lambda x: x.serialize(), ingredients))

    return jsonify(all_ingredients), 200

@api.route('/shoppinglist/<int:id>', methods=['PUT'])
def edit_ingredient():

    body = request.get_json()

    ingredient_id = Ingredient.query.get(body['id'])
    if ingredient_id is None:
        raise APIException('Ingredient no found', status_code=404)

    # if "drink_id" in body:
    #     ingredient_id.drink_id = body["drink_id"]
    # if "drink_name" in body:
    #     ingredient_id.drink_name = body["drink_name"]
    # if "ingredient_name" in body:
    #     ingredient_id.ingredient_name = body["ingredient_name"]
    if "is_done" in body:
        ingredient_id.is_done = body["is_done"]
        db.session.commit()

    ingredients = Ingredient.query.all()
    all_ingredients= list(map(lambda x: x.serialize(), ingredients))

    return jsonify(all_ingredients), 200

@api.route('/shoppinglist/<int:id>', methods=['DELETE'])
def delete_ingredient(id):
    shopping_list_id = Ingredient.query.get(id)
    if shopping_list_id is None:
        raise APIException('Favorite not found', status_code=404)
   
    db.session.delete(shopping_list_id)
    db.session.commit()

    ingredients = Ingredient.query.all()
    all_ingredients= list(map(lambda x: x.serialize(), ingredients))
    

    return jsonify(all_ingredients), 200

@api.route('/user', methods=['GET'])
def get_user():
    
    user_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(),  user_query))
    
    return jsonify(all_users), 200

@api.route('/user', methods=['POST'])
def post_user():
    body = request.json

    user = User(email=body['email'], password=body['password'] )
    db.session.add(user)
    db.session.commit()

    users =user.query.all()
    all_users= list(map(lambda x: x.serialize(), users))

    return jsonify(all_users), 200

@api.route('/user', methods=['PUT'])
def edit_user():

    body = request.get_json()

    user_id = User.query.get(body['id'])
    if user_id is None:
        raise APIException('Ingredient no found', status_code=404)

    if "email" in body:
        user_id.email = body["email"]
    if "password" in body:
        user_id.password = body["password"]

        db.session.commit()

    users = User.query.all()
    all_users= list(map(lambda x: x.serialize(), users))

    return jsonify(all_users), 200

@api.route('/user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user_id = User.query.get(id)
    if user_id is None:
        raise APIException('User not found', status_code=404)
   
    db.session.delete(user_id)
    db.session.commit()

    users =  User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))
    

    return jsonify(all_users), 200