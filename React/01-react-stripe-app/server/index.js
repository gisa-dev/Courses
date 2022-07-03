import express from "express";
import { Stripe } from "stripe";
import cors from 'cors'

const app = express()

app.listen(3001, () => {
  console.log('Server is running on port', 3001);
})
