const register = async (req, res) => {
  res.send('Register');
};
const login = async (req, res) => {
  res.send('login user');
};
const logout = async (req, res) => {
  res.send('logout user');
};

module.exports = {
  register,
  login,
  logout,
};
