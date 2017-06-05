var User = require('../models/user');
var series = require('../models/series');
var seasons = require('../models/seasons');
var comics = require('../models/comics');
var comments = require('../models/comments');
var FileSystem = require ('fs')


//user functions
exports.postUsers = function(req, res) {
  var user = new User({username: req.body.username, password: req.body.password, type: req.body.type, role: req.body.role});

  user.save(function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });

  });
};

exports.getUsers = function(req, res) {
  User.find({}, function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });
  })
}

exports.updateUsers = function(req, res) {
  var id = req.body.username;
  User.findOne({
    username: id
  }, function(err, user) {
    if (err) {
      res.json(err);
    }

    // var username = req.body.username;
    var password = req.body.password;
    // var type = req.body.type;
    var role = req.body.role;
    // user.username = username;
    user.password = password;
    // user.type = type;
    user.role = role;

    user.updated_at = new Date();

    user.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }

      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    })
  })
}

exports.deleteUsers = function(req, res) {
  var id = req.params._id;
  User.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    if (user) {
      User.remove({
        _id: id
      }, function(err, response) {
        if (err) {
          res.json(err);
        }

        res.json({
          status: true,
          respData: {
            data: response
          }
        });
      })
    } else {
      res.json({
        status: false,
        respData: {
          data: "user dosent exist"
        }
      });
    }

  })
}
//series funtions
exports.postseries = function(req, res) {
  var user = new series({
    name: req.body.name,
    description: req.body.description,
    created_by: req.body.created_by,
    Series_id: req.body.Series_id,
    created_at: new Date(),
    updated_at: ""

  });

  user.save(function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });

  });
};

exports.getseries = function(req, res) {
  series.find({}, function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });
  })
}

exports.updateseries = function(req, res) {
  var id = req.params._id;
  series.findOne({
    _id: id
  }, function(err, series) {
    if (err) {
      res.json(err);
    }

    var name = req.body.name;
    var description = req.body.description;
    // var created_by = req.body.created_by;
    series.name = name;
    series.description = description;
    // series.created_by = created_by;
    series.updated_at = new Date();

    series.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }

      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    })
  })
}

exports.deleteseries = function(req, res) {
  var id = req.params._id;
  series.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      // res.json(err);
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    if (user) {
      series.remove({
        _id: id
      }, function(err, response) {
        if (err) {
          res.json({
            status: false,
            respData: {
              data: err
            }
          });
        }

        res.json({
          status: true,
          respData: {
            data: response
          }
        });
      })
    } else {
      res.json({
        status: false,
        respData: {
          data: "series dosent exist"
        }
      });
    }

  })
}
//seasons funtions

exports.postseasons = function(req, res) {
  var user = new seasons({
    Name: req.body.Name,
    description: req.body.description,
    starts_on: req.body.starts_on,
    ends_on: req.body.ends_on,
    Series_name: req.body.Series_name,
    created_at: new Date(),
    updated_at: "",
    // Season_id: req.body.Season_id

  });

  user.save(function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });

  });
};

exports.getseasons = function(req, res) {
  seasons.find({}, function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });
  })
}
exports.getseason = function(req, res) {
  var name = req.params.Series_name;
  seasons.find({Series_name:name}, function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

  return  res.json({
      status: true,
      respData: {
        data: response
      }
    });
  })
}

exports.updateseasons = function(req, res) {
  var id = req.params._id;
  seasons.findOne({
    _id: id
  }, function(err, season) {
    if (err) {
      res.json(err);
    }

    var Name = req.body.Name;
    var description = req.body.description;
    var starts_on = req.body.starts_on;
    var ends_on = req.body.ends_on;
    season.Name = Name;
    season.description = description;
    season.starts_on = starts_on;
    season.ends_on = ends_on;
    season.updated_at = new Date();

    season.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }

      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    })
  })
}

exports.deleteseasons = function(req, res) {
  var id = req.params._id;
  seasons.findOne({
    _id: id
  }, function(err, season) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      })
    }

    if (season) {
      seasons.remove({
        _id: id
      }, function(err, response) {
        if (err) {
          res.json({
            status: false,
            respData: {
              data: err
            }
          })
        }

        res.json({
          status: true,
          respData: {
            data: response
          }
        })
      })
    } else {
      res.json({
        status: true,
        respData: {
          data: "user dosent exist"
        }
      })
    }

  })
}

//comics funtions

exports.postcomics = function(req, res) {
  var user = new comics({
    Name: req.body.Name,
    Story: req.body.Story,
    image: req.body.image,
    Season_name: req.body.Season_name,
    Series_name: req.body.Series_name,
    starts_on: req.body.starts_on,
    ends_on: req.body.ends_on,
    created_at: new Date(),
    updated_at: "",
    comments: ""

  });

  // let image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJD//Z'
// let image = user.image;


    let image = user.image;
    let name = user.Name;
    let matches = image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)

    // An empty object
    let response = {}

    if (matches.length !== 3) {
     return new Error('Invalid input string')
    }
    // Image type (i.e. image/jpeg)
    response.type = matches[1]
    // Image base64 data
    response.data = new Buffer(matches[2], 'base64')
    var data = imageNameData(image);
    function imageNameData (data) {
        var imageName = name + '_' + Math.random();
        if (data.indexOf('image/jpeg') > -1) {
            return imageName + '.jpeg';
        }
        if (data.indexOf('image/png') > -1) {
            return imageName + '.png';
        }
        if (data.indexOf('image/gif') > -1) {
            return imageName + '.gif';
        }
    }
    var imageName = '/home/user/series_node' +  '/' + data;

    FileSystem.writeFile(imageName, response.data, function (error) {
      console.log(response.data)
      if (error) throw error
    })
    user.image = data;
    user.save(function(err, response1) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        })
      }
    res.json({
      status: true,
      respData: {
        data: response1
      }
    });

  });
};

exports.getcomics = function(req, res) {
  comics.find({}, function(err, response) {
    // console.log(comics.image,"first")

    if (err) {
      res.json({
        status: fasle,
        respData: {
          data: err
        }
      });
    }
    for(var l=0; l<response.length; l++){
      response[l].image= "http://192.168.15.100:2000/" +  response[l].image
      console.log(response[l].image);
    }
    console.log(response)
    res.json({
      status: true,
      respData: {
        data: response
      }
    });
  })
}

exports.updatecomics = function(req, res) {
  var id = req.params._id;
  comics.findOne({
    _id: id
  }, function(err, comic) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    var Name = req.body.Name;
    var Story = req.body.Story;
    var starts_on = req.body.starts_on;
    var ends_on = req.body.ends_on;

    comic.Name = Name;
    comic.Story = Story;
    comic.starts_on = starts_on;
    comic.ends_on = ends_on;
    comic.updated_at = new Date();

    comic.save(function(err, response) {
      if (err) {
        res.json({
          status: false,
          respData: {
            data: err
          }
        });
      }

      res.json({
        status: true,
        respData: {
          data: response
        }
      });
    })
  })
}


exports.deletecomics = function(req, res) {
  var id = req.params._id;
  comics.findOne({
    _id: id
  }, function(err, comic) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    if (comic) {
      comics.remove({
        _id: id
      }, function(err, response) {
        if (err) {
          res.json({
            status: false,
            respData: {
              data: err
            }
          });
        }

        res.json({
          status: true,
          respData: {
            data: response
          }
        });
      })
    } else {
      res.json({
        status: true,
        respData: {
          data: "user doesn't exist"
        }
      });
    }

  })
}

exports.checkuser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password
  User.findOne({
    username: username,
    password: password
  }, function(err, user) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }

    if (user) {

      res.json({
        status: true,
        respData: {
          data: user
        }
      });
    } else {
      res.json({
        status: true,
        respData: {
          data: "user doesnt exist"
        }
      });
    }
  })
}

exports.searchcomics = function(req, res) {
  console.log(req.params.reg);
  var regex = RegExp(req.params.reg);

  comics.find({
    Name: regex
  }, function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      });
    }
    if ((response || []).length === 0) {
      return res.json({
        status: false,
        respData: {
          data: "data doesnt exist"
        }
      });
    }
      return res.json({
        status: true,
        respData: {
          data: response
        }
      });


  })
};

exports.postcomment = function(req, res) {
  var comment = new comments({
    Comic_id: req.body.Comic_id,
    Comment: req.body.Comment,
    User_name: req.body.User_name,
    posted_at: new Date(),


  });

  comment.save(function(err, response) {
    if (err) {
      res.json({
        status: false,
        respData: {
          data: err
        }
      })
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });

  });
};

exports.getcomment = function(req, res) {
  // var id = req.params.Comic_id
  comments.find({}, function(err, response) {
    if (err) {
      res.json({
        status: fasle,
        respData: {
          data: err
        }
      });
    }

    res.json({
      status: true,
      respData: {
        data: response
      }
    });
  })
}
