# Artion-Server
Code for server side deployment of Artion Marketplace.

## Project Setup
```
npm install 
```

## Launch docker environment
```console
cd docker
docker-compose up -d
```

## Compile
```
npm run start / npm run dev (nodemon)
```

#### .env file sample
```
# Ropsten explorer url with api
EXPLORER_URL=
EXPLORER_API_KEY=

JWT_SECRET=

# Add ropsten config if dev
NETWORK_RPC=
NETWORK_CHAINID=

# use this if using docker compose
DB_URL="mongodb://root:root@localhost:27017"

APP_URL=

# Private key of treasury address
ROYALTY_PK=

MARKETPLACE_ADDRESS="0x4Ba034078bDC894a396082aB6570E16df5F8Ba5b"
AUCTION_ADDRESS="0x6a06B0d4F63D91CD213a90A24271080dCf7F4C9E"
BUNDLE_MARKETPLACE_ADDRESS="0x8232b558719DF79DE3CA43Bb2775A488cCE3AF01
WFTM_ADDRESS="0xa28956e6421f366b671e19c3e38b571f7815cc54
PRICE_USDC=1
PRICE_FUSDT=2
PORT=3001
```
