import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Connect, Query } from '../config/mysql';

const NAMESPACE = 'Node';

const createNode = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Creating Node.');

    let { name, author } = req.body;

    let query = `INSERT INTO nodejs_api (name,author) VALUES ("${name}","${author}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);
                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllNode = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Getting all Node`);

    let query = 'SELECT * FROM nodejs_api';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);
                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { createNode, getAllNode };
