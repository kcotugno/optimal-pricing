const updatePrices = function () {
    for (var i = 0; i < map.numRides; i++) {
        var ride = map.rides[i];

        if (ride.value === null) {
            continue;
        }

        ride.price = [ride.value * 2];
    }
};

const main = function () {
    context.subscribe('interval.day', updatePrices);
}

registerPlugin({
    name: "Optimal Pricing",
    version: "1.0",
    authors: ["Kevin Cotugno"],
    type: "remote",
    licence: "MIT",
    main: main
});