import { Request, Response} from 'express';

const signUp = (req: Request, res: Response) => {
    
    return res.send('chegou aqui!')
}

export const SignUpController = {
    signUp,
}