// Insert match data into db.
if (Stats.find().count() === 0){

  Stats.insert({
    point_nb: 1,
    set: 1,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 0,
    P2_score: 1,
    serve_net: 0,
    nb_rally: 6,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 2,
    set: 1,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 0,
    P2_score: 2,
    serve_net: 0,
    nb_rally: 4,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 3,
    set: 1,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 0,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 8,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 4,
    set: 1,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 1,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 2,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 5,
    set: 1,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 2,
    P2_score: 3,
    serve_net: 1,
    nb_rally: 10,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 6,
    set: 1,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 2,
    P2_score: 4,
    serve_net: 0,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 7,
    set: 1,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 2,
    P2_score: 5,
    serve_net: 0,
    nb_rally: 5,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 8,
    set: 1,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 2,
    P2_score: 6,
    serve_net: 0,
    nb_rally: 3,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 9,
    set: 1,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 3,
    P2_score: 6,
    serve_net: 0,
    nb_rally: 0,
    point_end: "serve"
  });

  Stats.insert({
    point_nb: 10,
    set: 1,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 4,
    P2_score: 6,
    serve_net: 0,
    nb_rally: 3,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 11,
    set: 1,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 4,
    P2_score: 7,
    serve_net: 0,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 12,
    set: 1,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 4,
    P2_score: 8,
    serve_net: 0,
    nb_rally: 14,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 13,
    set: 1,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 4,
    P2_score: 9,
    serve_net: 0,
    nb_rally: 1,
    point_end: "ace"
  });

  Stats.insert({
    point_nb: 14,
    set: 1,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 5,
    P2_score: 9,
    serve_net: 1,
    nb_rally: 3,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 15,
    set: 1,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 5,
    P2_score: 10,
    serve_net: 0,
    nb_rally: 3,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 16,
    set: 1,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 5,
    P2_score: 11,
    serve_net: 0,
    nb_rally: 2,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 17,
    set: 2,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 1,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 1,
    point_end: "ace"
  });

  Stats.insert({
    point_nb: 18,
    set: 2,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 2,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 9,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 19,
    set: 2,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 3,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 4,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 20,
    set: 2,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 4,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 12,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 21,
    set: 2,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 5,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 2,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 22,
    set: 2,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 6,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 6,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 23,
    set: 2,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 7,
    P2_score: 0,
    serve_net: 1,
    nb_rally: 8,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 24,
    set: 2,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 7,
    P2_score: 1,
    serve_net: 0,
    nb_rally: 21,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 25,
    set: 2,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 7,
    P2_score: 2,
    serve_net: 0,
    nb_rally: 0,
    point_end: "serve"
  });

  Stats.insert({
    point_nb: 26,
    set: 2,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 7,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 2,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 27,
    set: 2,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 8,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 18,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 28,
    set: 2,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 9,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 6,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 29,
    set: 2,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 10,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 3,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 30,
    set: 2,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 11,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 31,
    set: 3,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 0,
    P2_score: 1,
    serve_net: 0,
    nb_rally: 1,
    point_end: "ace"
  });

  Stats.insert({
    point_nb: 32,
    set: 3,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 0,
    P2_score: 2,
    serve_net: 0,
    nb_rally: 1,
    point_end: "ace"
  });

  Stats.insert({
    point_nb: 33,
    set: 3,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 0,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 9,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 34,
    set: 3,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 1,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 4,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 35,
    set: 3,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 2,
    P2_score: 3,
    serve_net: 1,
    nb_rally: 11,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 36,
    set: 3,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 2,
    P2_score: 4,
    serve_net: 0,
    nb_rally: 4,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 37,
    set: 3,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 2,
    P2_score: 5,
    serve_net: 0,
    nb_rally: 3,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 38,
    set: 3,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 2,
    P2_score: 6,
    serve_net: 0,
    nb_rally: 2,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 39,
    set: 3,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 3,
    P2_score: 6,
    serve_net: 0,
    nb_rally: 14,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 40,
    set: 3,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 4,
    P2_score: 6,
    serve_net: 0,
    nb_rally: 1,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 41,
    set: 3,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 4,
    P2_score: 7,
    serve_net: 0,
    nb_rally: 3,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 42,
    set: 3,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 4,
    P2_score: 8,
    serve_net: 0,
    nb_rally: 2,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 43,
    set: 3,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 4,
    P2_score: 9,
    serve_net: 0,
    nb_rally: 3,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 44,
    set: 3,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 5,
    P2_score: 9,
    serve_net: 1,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 45,
    set: 3,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 5,
    P2_score: 10,
    serve_net: 0,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 46,
    set: 3,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 5,
    P2_score: 11,
    serve_net: 0,
    nb_rally: 0,
    point_end: "serve"
  });

  Stats.insert({
    point_nb: 47,
    set: 4,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 1,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 6,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 48,
    set: 4,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 2,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 4,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 49,
    set: 4,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 3,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 8,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 50,
    set: 4,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 4,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 51,
    set: 4,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 5,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 10,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 52,
    set: 4,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 6,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 3,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 53,
    set: 4,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 7,
    P2_score: 0,
    serve_net: 1,
    nb_rally: 0,
    point_end: "serve"
  });

  Stats.insert({
    point_nb: 54,
    set: 4,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 7,
    P2_score: 1,
    serve_net: 0,
    nb_rally: 3,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 55,
    set: 4,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 7,
    P2_score: 2,
    serve_net: 0,
    nb_rally: 0,
    point_end: "serve"
  });

  Stats.insert({
    point_nb: 56,
    set: 4,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 7,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 0,
    point_end: "serve"
  });

  Stats.insert({
    point_nb: 57,
    set: 4,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 8,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 9,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 58,
    set: 4,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 9,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 3,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 59,
    set: 4,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 10,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 1,
    point_end: "ace"
  });

  Stats.insert({
    point_nb: 60,
    set: 4,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 11,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 61,
    set: 5,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 1,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 9,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 62,
    set: 5,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 2,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 4,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 63,
    set: 5,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 3,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 12,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 64,
    set: 5,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 4,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 65,
    set: 5,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 5,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 6,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 66,
    set: 5,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 6,
    P2_score: 0,
    serve_net: 0,
    nb_rally: 8,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 67,
    set: 5,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 7,
    P2_score: 0,
    serve_net: 1,
    nb_rally: 21,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 68,
    set: 5,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 7,
    P2_score: 1,
    serve_net: 0,
    nb_rally: 3,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 69,
    set: 5,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 7,
    P2_score: 2,
    serve_net: 0,
    nb_rally: 0,
    point_end: "serve"
  });

  Stats.insert({
    point_nb: 70,
    set: 5,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 7,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 2,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 71,
    set: 5,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 8,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 3,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 72,
    set: 5,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 9,
    P2_score: 3,
    serve_net: 0,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 73,
    set: 5,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 9,
    P2_score: 4,
    serve_net: 0,
    nb_rally: 14,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 74,
    set: 5,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 9,
    P2_score: 5,
    serve_net: 0,
    nb_rally: 11,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 75,
    set: 5,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 9,
    P2_score: 6,
    serve_net: 0,
    nb_rally: 5,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 76,
    set: 5,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 9,
    P2_score: 7,
    serve_net: 0,
    nb_rally: 8,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 77,
    set: 5,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 9,
    P2_score: 8,
    serve_net: 0,
    nb_rally: 0,
    point_end: "serve"
  });

  Stats.insert({
    point_nb: 78,
    set: 5,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 9,
    P2_score: 9,
    serve_net: 0,
    nb_rally: 6,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 79,
    set: 5,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 10,
    P2_score: 9,
    serve_net: 0,
    nb_rally: 4,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 80,
    set: 5,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 10,
    P2_score: 10,
    serve_net: 2,
    nb_rally: 8,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 81,
    set: 5,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 10,
    P2_score: 11,
    serve_net: 0,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 82,
    set: 5,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 11,
    P2_score: 11,
    serve_net: 0,
    nb_rally: 2,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 83,
    set: 5,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 11,
    P2_score: 12,
    serve_net: 0,
    nb_rally: 3,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 84,
    set: 5,
    point_server: "Player2",
    point_winner: "Player1",
    P1_score: 12,
    P2_score: 12,
    serve_net: 1,
    nb_rally: 3,
    point_end: "out"
  });

  Stats.insert({
    point_nb: 85,
    set: 5,
    point_server: "Player1",
    point_winner: "Player1",
    P1_score: 13,
    P2_score: 12,
    serve_net: 0,
    nb_rally: 1,
    point_end: "ace"
  });

  Stats.insert({
    point_nb: 86,
    set: 5,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 13,
    P2_score: 13,
    serve_net: 0,
    nb_rally: 17,
    point_end: "in"
  });

  Stats.insert({
    point_nb: 87,
    set: 5,
    point_server: "Player1",
    point_winner: "Player2",
    P1_score: 13,
    P2_score: 14,
    serve_net: 0,
    nb_rally: 0,
    point_end: "serve"
  });

  Stats.insert({
    point_nb: 88,
    set: 5,
    point_server: "Player2",
    point_winner: "Player2",
    P1_score: 13,
    P2_score: 15,
    serve_net: 0,
    nb_rally: 7,
    point_end: "out"
  });
}