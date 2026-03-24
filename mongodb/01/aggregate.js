// Case Study 01: Aggregation Framework

db.watchHistory.aggregate([
  // each genre in 2024
  { $match: { year: 2024 } },

  // calculate total views and average rating per genre
  { $group: { _id: "$genre", totalViews: { $sum: "$views" }, avgRating: { $avg: "$rating" } } },

  // only include genres with more than 10,000 total views.
  { $match: { totalViews: { $gt: 10000 } } },

  // output
  { $project: { _id: 0, genre: "$_id", totalViews: 1, avgRating: { $round: ["$avgRating", 1] } } },
]);

// Output:
// { totalViews: 37000, genre: 'Sci-Fi', avgRating: 8.4 }
// { totalViews: 48000, genre: 'Action', avgRating: 8.7 }
