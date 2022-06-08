var twoSum = function (nums, target) {
    var obj = {};
    var difference;
    for (var i = 0; i < nums.length; i++) {
        difference = target - nums[i];
        if (difference in obj)
            return [obj[difference], i];
        obj[nums[i]] = i;
    }
};
