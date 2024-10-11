// routes.js (example)
const { login, signUp } = require('./controllers/authController');
const { bookRide } = require('./controllers/rideController');
const auth = require('./middleware/authMiddleware');

router.post('/login', login);
router.post('/signup', signUp);
router.post('/ride', auth, bookRide); // Protect route
