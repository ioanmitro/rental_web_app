GET /apartments?location=Thessaloniki&min_price=0&max_price=1000&bedrooms=2&api_key=12345abc

# the 'api_key' parameter is added to the API request as a query parameter. The '12345abc' value is a 
# placeholder for the actual API key issued by the apartment listing API provider

# The apartment listing API server checks the API key to verify that is is valid and authorized to access
# the requested resource. If the API key is valid, the server returns the requested apartments listings.
# If the API key is invalid or unauthorized, the server returns an error response with a relevant error 
# message

# API key authentication is one of the many possible ways to secure an API. Other methods would be OAuth2/