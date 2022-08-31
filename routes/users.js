import express from 'express';

const router = express.Router();

const users = [
    {
        crypto: "Bitcoin",
        currentprice: 20213,
        marketcap: "$386,966,951,527",
        totalsupply: 19137843
    },
    {
        crypto: "Ethereum",
        currentprice: 1578.15,
        marketcap: "$192,831,121,500",
        totalsupply: 122188115
    },
    {
        crypto: "Cardano",
        currentprice: 0.4564,
        marketcap: "$15,403,960,717",
        totalsupply: 34277702082
    }

]

// all routes in here are starting with /users
router.get('/', (req,res) => {
    res.send(users);
} );

router.post('/',(req,res) => {

    const user = req.body;

    users.push(user);

    res.send(`Cryptocurrency with the name ${user.crypto} added to the database!`);
});

router.get('/moreinfo',(req, res) => {
    res.send('More crypocurrency information here:')
});

export default router;