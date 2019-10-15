import {
    createContestSchema,
    updateContestSchema
} from '../../utils/yupSchemas/contestSchemas';


const validateDataOnCreateContest = async (req, res, next) =>  {
    const contests = JSON.parse(req.body.formFields);
    try {
        req.body.contests = await createContestSchema.validate(contests, {stripUnknown: true});
        next()

    } catch (e) {
        next(e);
    }
};

const validateDataOnUpdateContest = async (req, res, next) => {
    const { updateFields } = req.body;
    try {
        req.body.updateFields = await updateContestSchema.validate(updateFields, {stripUnknown: true});
        next()

    } catch (e) {
        next(e);
    }
};


module.exports = {
    validateDataOnCreateContest,
    validateDataOnUpdateContest
};
