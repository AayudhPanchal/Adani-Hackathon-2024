// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PowerPlantConsumerRegistry {
    struct PowerPlant {
        string plantName;
        string city;
        string plantType;
        uint256 year;
        uint256 powerGenerated;
    }

    struct Consumer {
        string name;
        uint256 year;
        uint256 energyConsumption;
    }

    PowerPlant[] public powerPlants;
    Consumer[] public consumers;

    // Events
    event PowerPlantAdded(string plantName, string city, string plantType, uint256 year, uint256 powerGenerated);
    event ConsumerAdded(string name, uint256 year, uint256 energyConsumption);

    // Add a new power plant
    function addPowerPlant(
        string memory _plantName,
        string memory _city,
        string memory _plantType,
        uint256 _year,
        uint256 _powerGenerated
    ) public {
        PowerPlant memory newPlant = PowerPlant({
            plantName: _plantName,
            city: _city,
            plantType: _plantType,
            year: _year,
            powerGenerated: _powerGenerated
        });
        
        powerPlants.push(newPlant);
        
        emit PowerPlantAdded(_plantName, _city, _plantType, _year, _powerGenerated);
    }

    // Add a new consumer
    function addConsumer(
        string memory _name,
        uint256 _year,
        uint256 _energyConsumption
    ) public {
        Consumer memory newConsumer = Consumer({
            name: _name,
            year: _year,
            energyConsumption: _energyConsumption
        });
        
        consumers.push(newConsumer);
        
        emit ConsumerAdded(_name, _year, _energyConsumption);
    }

    // List all power plants and consumers
    function listAll() public view returns (PowerPlant[] memory, Consumer[] memory) {
        return (powerPlants, consumers);
    }

    // Helper functions
    function getTotalPowerPlants() public view returns (uint256) {
        return powerPlants.length;
    }

    function getTotalConsumers() public view returns (uint256) {
        return consumers.length;
    }
}

// address : 0xc1a7bb8a8c4c22a9f39fee2594addf4dc27e9b19