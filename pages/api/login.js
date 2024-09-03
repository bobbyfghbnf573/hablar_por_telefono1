export default function handler(req, res) {
    const { email, password } = req.body;
  
    const users = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
    ];
  
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      // Crear un token simple (puedes usar JWT o un identificador único para más seguridad)
      const token = `${user.email}-token`;
      res.status(200).json({ success: true, token });
    } else {
      res.status(401).json({ success: false });
    }
  }
  