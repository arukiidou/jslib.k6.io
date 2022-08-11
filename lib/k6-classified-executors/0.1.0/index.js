/**
 * Useful utility libs for k6 scripts - It provides classified executors.
 * @module executor
 * @see {@link https://k6.io/docs/using-k6/scenarios/#executors}
 */

class SharedIterations {
    /** @ignore */
    executor = 'shared-iterations'

    /**
     * @classdesc A fixed number of iterations are "shared" between a number of VUs, and the test ends once all iterations are executed.
     *                This executor is equivalent to the global vus and iterations shortcut options.
     *                Note that iterations aren't fairly distributed with this executor, and a VU that executes faster will complete more iterations than others.
     *                If you want guarantees that every VU will complete a specific, fixed number of iterations, use the per-VU iterations executor.
     * @param {number} [vus] Number of VUs to run concurrently.
     * @param {number} [iterations] Total number of script iterations to execute across all VUs.
     * @param {string} [maxDuration] Maximum scenario duration before it's forcibly stopped (excluding gracefulStop).
     * @see {@link https://k6.io/docs/using-k6/scenarios/executors/shared-iterations/ "k6.io/docs - Shared iterations"}
    */
    constructor(vus = 1, iterations = 1, maxDuration = '10m') {
        this.vus = vus;
        this.iterations = iterations;
        this.maxDuration = maxDuration;
    }
}

class PerVUIterations {
    /** @ignore */
    executor = 'per-vu-iterations'

    /**
     * @classdesc Each VU executes an exact number of iterations.
     *                The total number of completed iterations will be vus * iterations.
     * @param {number} [vus] Number of VUs to run concurrently.
     * @param {number} [iterations] Number of exec function iterations to be executed by each VU.
     * @param {string} [maxDuration] Maximum scenario duration before it's forcibly stopped (excluding gracefulStop).
     * @see {@link https://k6.io/docs/using-k6/scenarios/executors/per-vu-iterations/ "k6.io/docs - Per VU iterations"}
    */
    constructor(vus = 1, iterations = 1, maxDuration = '10m') {
        this.vus = vus;
        this.iterations = iterations;
        this.maxDuration = maxDuration;
    }
}

class ConstantVUs {
    /** @ignore */
    executor = 'constant-vus'

    /**
     * @classdesc A fixed number of VUs execute as many iterations as possible for a specified amount of time.
     *                This executor is equivalent to the global vus and duration options.
     * @param {string} duration Total scenario duration (excluding gracefulStop).
     * @param {number} [vus] Number of VUs to run concurrently.
     * @see {@link https://k6.io/docs/using-k6/scenarios/executors/constant-vus/ "k6.io/docs - Constant VUs"}
    */
    constructor(duration, vus = 1) {
        this.duration = duration;
        this.vus = vus;
    }
}

class RampingVUs {
    /** @ignore */
    executor = 'ramping-vus'

    /**
     * @classdesc A variable number of VUs execute as many iterations as possible for a specified amount of time.
     *                This executor is equivalent to the global stages option.
     * @param {Array.<{duration: string, target:number}>} stages - Array of objects that specify the target number of VUs to ramp up or down to.
     * @param {string} stages[].duration - A string specifying the total duration a test run should be run for. During this time each VU will execute the script in a loop. 
     * @param {number} stages[].target - Target number of VUs to ramp up or down to.
     * @param {number} [startVUs=1] Number of VUs to run at test start.
     * @param {string} [gracefulRampDown='30s'] Time to wait for an already started iteration to finish before stopping it during a ramp down.
     * @see {@link https://k6.io/docs/using-k6/scenarios/executors/ramping-vus/ "k6.io/docs - Ramping VUs"}
    */
    constructor(stages, startVUs = 1, gracefulRampDown = '30s') {
        this.stages = stages;
        this.startVUs = startVUs;
        this.gracefulRampDown = gracefulRampDown;
    }
}

class ConstantArrivalRate {
    /** @ignore */
    executor = 'constant-arrival-rate'

    /**
     * @classdesc A fixed number of iterations are started in a specified period of time. 
     *                This executor will continue to start iterations at the given rate as long as there are VUs available to run them. 
     *                Since iteration execution time can vary because of test logic or the system-under-test responding more slowly, 
     *                this executor will try to compensate by running a variable number of VUs—including potentially initializing more in the middle of the test—to meet the configured iteration rate.
     *                This approach is useful for a more accurate representation of RPS, for example.
     *                See the {@link https://k6.io/docs/using-k6/scenarios/arrival-rate/ arrival rate} section for details.
     * @param {string} duration Total scenario duration (excluding gracefulStop).
     * @param {number} rate Number of iterations to start during each timeUnit period.
     * @param {number} preAllocatedVUs Number of VUs to pre-allocate before test start to preserve runtime resources.
     * @param {string} [timeUnit] Period of time to apply the rate value.
     * @param {number} [maxVUs=preAllocatedVUs] Maximum number of VUs to allow during the test run. If unset, same as preAllocatedVUs
     * @see {@link https://k6.io/docs/using-k6/scenarios/executors/constant-arrival-rate/ "k6.io/docs - Constant arrival rate"}
    */
    constructor(duration, rate, preAllocatedVUs, timeUnit = '1s', maxVUs) {
        this.duration = duration;
        this.rate = rate;
        this.preAllocatedVUs = preAllocatedVUs;
        this.timeUnit = timeUnit;
        this.maxVUs = maxVUs ?? preAllocatedVUs;
    }
}

class RampingArrivalRate {
    /** @ignore */
    executor = 'ramping-arrival-rate'

    /**
     * @classdesc A variable number of iterations are started in specified periods of time. 
     *                This is similar to the ramping VUs executor, but for iterations instead. k6 will attempt to dynamically change the number of VUs to achieve the configured iteration rate.
     *                See the {@link https://k6.io/docs/using-k6/scenarios/arrival-rate/ arrival rate} section for details.
     * @param {Array.<{duration: string, target:number}>} stages - Array of objects that specify the target number of VUs to ramp up or down to.
     * @param {string} stages[].duration - A string specifying the total duration a test run should be run for. During this time each VU will execute the script in a loop. 
     * @param {number} stages[].target - Target number of VUs to ramp up or down to.
     * @param {number} preAllocatedVUs Number of VUs to pre-allocate before test start to preserve runtime resources.
     * @param {number} [startRate=0] Number of iterations to execute each timeUnit period at test start.
     * @param {string} [timeUnit=1s] Period of time to apply the startRate to the stages' target value. Its value is constant for the whole duration of the scenario, it is not possible to change it for a specific stage.
     * @param {number} [maxVUs=preAllocatedVUs] Maximum number of VUs to allow during the test run. If unset, same as preAllocatedVUs
     * @see {@link https://k6.io/docs/using-k6/scenarios/executors/constant-arrival-rate/ "k6.io/docs - Constant arrival rate"}
    */
    constructor(stages, preAllocatedVUs, startRate = 0, timeUnit = '1s', maxVUs) {
        this.stages = stages;
        this.preAllocatedVUs = preAllocatedVUs;
        this.startRate = startRate;
        this.timeUnit = timeUnit;
        this.maxVUs = maxVUs ?? preAllocatedVUs;
    }
}

class ExternallyControlled {
    /** @ignore */
    executor = 'constant-vus'

    /**
     * @classdesc Control and scale execution at runtime via k6's REST API or the CLI.
     *            Previously, the pause, resume, and scale CLI commands were used to globally control k6 execution. 
     *            This executor does the same job by providing a better API that can be used to control k6 execution at runtime.
     *            Note that, passing arguments to the scale CLI command for changing the amount of active or maximum VUs will only affect the externally controlled executor.
     * @param {string} duration Total scenario duration (excluding gracefulStop).
     * @param {number} vus Number of VUs to run concurrently.
     * @param {number} maxVUs Maximum number of VUs to allow during the test run. If unset, same as preAllocatedVUs
     * @see {@link https://k6.io/docs/using-k6/scenarios/executors/externally-controlled/ "k6.io/docs - Externally controlled"}
    */
    constructor(duration, vus, maxVUs) {
        this.duration = duration;
        this.vus = vus;
        this.maxVUs = maxVUs;
    }
}

/**
 * @exports executor
 * @see module:executor
 */
module.exports = { SharedIterations, PerVUIterations, ConstantVUs, RampingVUs, ConstantArrivalRate, RampingArrivalRate, ExternallyControlled }
