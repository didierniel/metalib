package com.sap.hana.cloud.sample;

import javax.persistence.*;

@Entity
@Table(name = "T_BOOK")
public class Book {

	@Id
	private long id;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

}