const bannedWords = ['hate', 'kill', 'slur1', 'slur2']; // expand list

const checkModeration = (req, res, next) => {
  const text = req.body.text.toLowerCase();
  const found = bannedWords.some(word => text.includes(word));
  if (found) {
    return res.status(400).json({
      warning: true,
      message: '⚠️ Your comment contains inappropriate language and was rejected.'
    });
  }
  next();
};
module.exports = checkModeration;