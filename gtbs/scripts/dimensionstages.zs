import mods.redimstages.ReDimensionStages;

ReDimensionStages.restrict("aether:the_aether", "aether");
ReDimensionStages.restrict("minecraft:the_nether", "nether");
ReDimensionStages.restrict("minecraft:the_end", "end");

ReDimensionStages.restrictWithMessage("aether:the_aether", "You need to progress further to unlock this.", "aether");
ReDimensionStages.restrictWithMessage("minecraft:the_nether", "You need to progress further to unlock this.", "nether");
ReDimensionStages.restrictWithMessage("minecraft:the_end", "You need to progress further to unlock this.", "end");