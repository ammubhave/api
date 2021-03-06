// SIMMONS API CLIENT STUBS FOR JAVASCRIPT
// This code was auto-generated by stubgen.py
// DO NOT EDIT IT BY HAND. Edit apis.yaml instead.
// This will ensure that changes are reflected in other
// languages stubs.

this.RPC_call = function( path, callback ) {
	console.log("Tried to call to http://simapi.xvm.mit.edu/" + path);
        $.getJSON("http://simapi.xvm.mit.edu/" + path, callback);
	return "";
}


// Beginning stubs for rooms:
// Provides data about the physical characteristics of Simmons rooms.
this.rooms = {
	
	// Returns a list of all rooms.
	get_all: function( callback ) {
		return RPC_call( "rooms/", callback );
	},

	// Returns all data for a specific room.
	get_room: function( roomnum, callback ) {
		return RPC_call( "rooms/"+roomnum+"/", callback );
	},
}; // End of stubs for rooms

// Beginning stubs for rooming_assignment:
// Provides information about the mapping between residents and the rooms where they live. Historical data is planned.
this.rooming_assignment = {
	
	// Returns the room that the given person is currently living in.
	get_room_by_person: function( username, callback ) {
		return RPC_call( "rooming_assignment/person/"+username+"/", callback );
	},

	// Returns the people that currently reside in the given room.
	get_people_by_room: function( roomnum, callback ) {
		return RPC_call( "rooming_assignment/room/"+roomnum+"/", callback );
	},
}; // End of stubs for rooming_assignment

// Beginning stubs for people:
// Provides identity-related data about the residents of Simmons.
this.people = {
	
	// Returns a list of all current residents' usernames
	get_all: function( callback ) {
		return RPC_call( "people/", callback );
	},

	// Returns all data on a specific resident.
	get_person: function( username, callback ) {
		return RPC_call( "people/"+username+"/", callback );
	},

	// Returns the usernames matching the passed query. To match a query, a user has to have each space seperated token (querylet) as part of its special fields. The special fields are 'kerberos', 'firstname', and 'lastname'. Matches are case insenstive.
	query: function( query, callback ) {
		return RPC_call( "people/?q="+query+"", callback );
	},
}; // End of stubs for people

// Beginning stubs for profiles:
// Provides more personal information about the residents of Simmons.
this.profiles = {
	
	// Returns a resident profile.
	get_profile: function( username, callback ) {
		return RPC_call( "profile/"+username+"/", callback );
	},
}; // End of stubs for profiles

// Beginning stubs for laundry:
// Provides information on the current state of laundry machines in the building.
this.laundry = {
	
	// Returns a raw dump of all avalible information on the laundry. Stopgap until a better API is enacted.
	get_raw: function( callback ) {
		return RPC_call( "laundry/", callback );
	},
}; // End of stubs for laundry

// Beginning stubs for buses:
// Provides information on the current state of buses coming to Simmons.
this.buses = {
	
	// Returns a raw dump of all avalible information on buses. Stopgap until a better API is enacted.
	get_raw: function( callback ) {
		return RPC_call( "buses/", callback );
	},
}; // End of stubs for buses
