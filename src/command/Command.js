class Command
{

    constructor(name, aliases, category, description, 
        usage, expectedArgs, enabled, New, ownerOnly, hidden,
        guildOnly) {

        this.name = name;

        this.aliases = aliases || [];

        this.category = category || '';

        this.description = description || '';

        this.usage = usage || [];

        this.expectedArgs = expectedArgs || 0;

        this.enabled = enabled || false;

        this.New = New || true;

        this.ownerOnly = ownerOnly || false;

        this.hidden = hidden || false;

        this.guildOnly = guildOnly || true;
    }
}

module.exports = Command;