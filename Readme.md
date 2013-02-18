# date-range-partition

  Partition a date range in friendly ticks

## Installation

    $ component install karlbohlmark/date-range-partition

## API

   ```javascript
    var partition = require('date-range-partition')
    // partition 1 hour into approximately 7 partitions
    var partitioning = partition(60 * 60 * 1000, 7)
    // > { count: 6,
    //     interval: 60,
    //     intervalName: '10m' }
    
   ```
   

## License

  MIT
