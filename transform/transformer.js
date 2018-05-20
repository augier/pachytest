const fixturesFolder = '/pfs/fixtures/';
const f8FixturesFolder = '/pfs/out/';

// const fixturesFolder = './test_files/';
// const f8FixturesFolder = './test_files/out/';
const fs = require('fs');

function transformFixture(fileName, fixture) {
    var parsedFixture = JSON.parse(fixture); 
    var f8Fixture = {
        eventName: parsedFixture.desc,
        evId: parsedFixture.ev_id,
        sport: parsedFixture.ev_class_name,
        competition: parsedFixture.ev_type_name
    };

    fs.writeFile(f8FixturesFolder + "new_" + fileName , JSON.stringify(f8Fixture), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}


fs.readdir(fixturesFolder, (err, files) => {
  if (err) {
      return console.log(err);
  }
  files.forEach(file => {
    fs.readFile(fixturesFolder + file, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        transformFixture(file, data)
      });
  });
})

