$.lang.register('customcommands.add.error', 'that command already exists');
$.lang.register('customcommands.add.success', 'command !$1 has been created!');
$.lang.register('customcommands.add.usage', 'usage: !addcom (command) (message)');
$.lang.register('customcommands.alias.delete.error.alias.404', 'Alias does not exist: !$1');
$.lang.register('customcommands.alias.delete.success', '$1, the alias !$2 was successfully deleted!');
$.lang.register('customcommands.alias.delete.usage', 'usage: !delalias (alias name)');
$.lang.register('customcommands.alias.error', 'An alias already exists for !$1. Delete it first.');
$.lang.register('customcommands.alias.error.target404', 'the target command does not exist!');
$.lang.register('customcommands.alias.success', 'the command !$1 was successfully aliased to !$2');
$.lang.register('customcommands.alias.usage', 'usage: !aliascom (existing command) (alias name)');
$.lang.register('customcommands.delete.success', 'command !$1 has been removed!');
$.lang.register('customcommands.delete.usage', 'usage: !delcom (command)');
$.lang.register('customcommands.edit.404', 'you cannot overwrite a default command.');
$.lang.register('customcommands.set.perm.error.target404', 'the command !$1 does not exist!');
$.lang.register('customcommands.set.perm.success', 'permissions for command: $1 set for group: $2 and higher.');
$.lang.register('customcommands.set.perm.unset.success', 'All recursive permissions for the command: $1 and any of its aliases have been removed.');
$.lang.register('customcommands.set.perm.usage', 'usage: !permcom (command name) (group id/name). Restricts usage of a command to viewers with a certain permission level.');
$.lang.register('customcommands.set.perm.404', 'This command does not seem to exist: $1');
$.lang.register('customcommands.set.price.error.404', 'please select a command that exists and is available to non-mods.');
$.lang.register('customcommands.set.price.error.invalid', 'please enter a valid price, 0 or greater.');
$.lang.register('customcommands.set.price.success', 'the price for !$1 has been set to $2 $3.');
$.lang.register('customcommands.set.price.usage', 'usage: !pricecom (command) (price)');
$.lang.register('customcommands.404.no.commands', 'there are no custom commands, add one with !addcom');
$.lang.register('customcommands.cmds', 'current custom commands: $1');
$.lang.register('customcommands.edit.usage', 'usage: !editcom (command) (message)');
$.lang.register('customcommands.edit.success', 'command !$1 has been edited!');
$.lang.register('customcommands.touser.offline', 'Sorry, but $1 appears to be offline!');
$.lang.register('customcommands.customapi.404', 'The !$1 command requires parameters.');
$.lang.register('customcommands.customapijson.err', '!$1: An error occurred processing the API.');
$.lang.register('customcommands.disable.usage', 'Usage: !disablecom (command)');
$.lang.register('customcommands.disable.404', 'that command does not exists.');
$.lang.register('customcommands.disable.err', 'that command is already disabled.');
$.lang.register('customcommands.disable.success', 'command !$1 has been disabled.');
$.lang.register('customcommands.enable.usage', 'Usage: !enablecom (command)');
$.lang.register('customcommands.enable.404', 'that command does not exists.');
$.lang.register('customcommands.enable.err', 'that command is not disabled.');
$.lang.register('customcommands.enable.success', 'command !$1 has been re-enabled.');