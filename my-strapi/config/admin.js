module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'def8eaca8ca906d91177ac3dda2bd750'),
  },
});
