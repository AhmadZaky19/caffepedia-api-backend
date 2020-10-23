const orderUSerModel = require('../Models/orderUser');
const formResponse = require('../Helpers/formResponse');

const orderUSerController = {
    showOrder : (req, res) =>{
        orderUSerModel.showOrder(req.query)
        .then((data) =>{
            formResponse.success(res, data)
        }).catch((err) =>{
            formResponse.error(res, err)
        })
    },
    showAllOrder : (_, res) =>{
        orderUSerModel.showAllORder()
        .then((data) =>{
            formResponse.success(res, data)
        }).catch((err) =>{
            formResponse.error(res, err)
        })
    },

    insertOrder: (req, res) =>{
        orderUSerModel.insertOrder(req.body)
        .then((data) =>{
            const resData={
                ...req.body
            }
            formResponse.success(res, resData)
        }).catch((err) =>{
            formResponse.error(res,err)
        })
    },
    deleteById: (req, res) =>{
        orderUSerModel.deleteOrder(req.query.id)
        .then((data) =>{
            formResponse.success(res, data)
        }).catch((err) =>{
            formResponse.error(res, err)
        })
    }
}

module.exports= orderUSerController;