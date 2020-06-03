import {Response} from "express";

interface ErrorDefault {
    name: string;
    message: string
    status: number
}

class Exception {
    private _error: string;
    private _status: number;
    private _previousException: Error;

    constructor(error: string, status: number, previousException: Error) {
        this._error = error;
        this._status = status;
        this._previousException = previousException;
    }

    get error(): string {
        return this._error;
    }

    set error(value: string) {
        this._error = value;
    }

    get status(): number {
        return this._status;
    }

    set status(value: number) {
        this._status = value;
    }

    get previousException(): Error {
        return this._previousException;
    }

    set previousException(value: Error) {
        this._previousException = value;
    }
}

const normalize = (exception: ErrorDefault) => {
    const {name, message, status} = exception;
    if (!name) {
        return new Exception(message, 500, exception);
    }
    return new Exception(message, status || 500, exception);
};

export default (err: ErrorDefault, res: Response) => {
    const {status, error, previousException} = normalize(err);

    if (process.env.NODE_ENV !== 'dev') {
        return res.status(status || 500).json({error});
    }
    return res.status(status || 500).json({error, previousException});
};
