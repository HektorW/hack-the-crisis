import { Request, Response, NextFunction } from 'express'

export default function forceSsl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.get('Host')}${req.url}`)
  }

  next()
}
