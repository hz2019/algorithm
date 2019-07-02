var majorityElement = function(nums) {
    let half_len = Math.ceil(nums.length/2)
    let obj = {}
    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]] =1
        }else{
            obj[nums[i]]+=1
        }
    }
    for(key in obj){
        if(obj[key] >= half_len){
            return key
        }
    }
};
