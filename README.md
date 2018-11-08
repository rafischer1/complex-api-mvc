# complex-api-mvc

# Costume Shop
Build an API that represents products in a costume shop! You will have three resources:

# Costumes
ID: (You Choose) A unique id that represents the costume. Created automatically.
Name: (String) Name of the costume. Required.
Price: (Number) Price of the costume. Cannot be less than 1 cent. Required.
Description: (String) A description of the costume. Optional.

# Tags: (Array) An array of tags.
Tags
ID: (You Choose) A unique id that represents the tag. Created automatically.
Name: (String) Name of the tag. Cannot be longer than 10 characters. Required.
Color: (String) A color to be associated with the tag. Must be a valid hex color code (e.g. #123456). Optional.

//normal price: #33a7a0
//sale 25% : #dfde61
//2018 exclusive: #ae57de
//bargain: "#4244d6"


# Build RESTful routes so that you can:

Create, Read, Update, and Delete costumes
Create, Read, Update, and Delete tags through costumes
