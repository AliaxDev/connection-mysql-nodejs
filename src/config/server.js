import { express } from "express";

const PORT = process.env.PORT || 3000;

export const app = express();

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

