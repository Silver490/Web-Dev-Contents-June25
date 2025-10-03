# JWT - JSON Web Token
- Standard for securely transmitting information between parties as a JSON object.
- Information can be verified and trusted because it is digitally signed.
- Can be signed using a secret (with HMAC algorithm) or a public/private key pair using RSA or ECDSA.
- Commonly used for authentication and information exchange.

## Structure
A JWT is composed of three parts, separated by dots (.), which are:
1. Header : Typically consists of two parts: the type of token (JWT) and the signing algorithm being used, such as HMAC SHA256 or RSA.
   - Example:
     ```json
     {
       "alg": "HS256",
       "typ": "JWT"
     }
     ```
   - This JSON is Base64Url encoded to form the first part of the JWT.

2. Payload : Contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
    - Example:
      ```json
      {
         "sub": "1234567890",
         "name": "John Doe",
         "admin": true
      }
      ```
    - This JSON is Base64Url encoded to form the second part of the JWT.
3. Signature : To create the signature part, you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.
   - Example using HMAC SHA256:
     ```
     HMACSHA256(
       base64UrlEncode(header) + "." +
       base64UrlEncode(payload),
       secret)
     ```
   - The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

