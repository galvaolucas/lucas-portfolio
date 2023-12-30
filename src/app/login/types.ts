const StepsOptions = ['login', 'main', 'forgetPassword', 'createAccount'] as const;
export type IStepOptions = typeof StepsOptions[number]