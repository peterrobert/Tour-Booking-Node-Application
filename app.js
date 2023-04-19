const express = require("express");


const app = express()
const port = process.env.PORT || 3000;





// === SERVER ===
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});