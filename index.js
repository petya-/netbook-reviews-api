const application = require("./dist");

module.exports = application;

// ------------------ Eureka Config --------------------------------------------

const Eureka = require("eureka-js-client").Eureka;

const eureka = new Eureka({
  instance: {
    id: "reviews-service",
    instanceId: "reviews-service",
    app: "REVIEWS-SERVICE",
    hostName: "localhost",
    ipAddr: "127.0.0.1",
    statusPageUrl: "http://localhost:3000",
    port: {
      $: 3000,
      "@enabled": "true"
    },
    vipAddress: "reviews-service",
    dataCenterInfo: {
      "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
      name: "MyOwn"
    }
  },
  eureka: {
    host: "localhost",
    port: 8761,
    servicePath: "/eureka/apps/"
  }
});

eureka.logger.level("debug");
eureka.start(function(error) {
  console.log(error || "complete");
});

// ------------------ Server Config --------------------------------------------

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT || 3000),
      host: process.env.HOST,
      openApiSpec: {
        // useful when used with OASGraph to locate your application
        setServersFromRequest: true
      },
      cors: {
        origin: ""
      }
    }
  };
  application.main(config).catch(err => {
    console.error("Cannot start the application.", err);
    process.exit(1);
  });
}
