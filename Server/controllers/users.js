var User = require('../models/user');
var series = require('../models/series');
var seasons = require('../models/seasons');
var comics = require('../models/comics');

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
    Series_id: req.body.Series_id,
    created_at: new Date(),
    updated_at: "",
    Season_id: req.body.Season_id

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
    Season_id: req.body.Season_id,
    starts_on: req.body.starts_on,
    ends_on: req.body.ends_on,
    created_at: new Date(),
    updated_at: "",
    comments: ""

  });

  user.save(function(err, response) {
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

exports.getcomics = function(req, res) {
  comics.find({}, function(err, response) {
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

exports.addcomment = function(req, res) {
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

    var comments = req.body.comments;
    comic.comments = comments;

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
  var regex = RegExp(req.params.reg, "i");

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
