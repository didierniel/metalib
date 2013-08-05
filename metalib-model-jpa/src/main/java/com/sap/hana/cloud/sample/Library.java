package com.sap.hana.cloud.sample;

import javax.persistence.*;

@Entity
@Table(name = "T_PERSON")
@NamedQuery(name = "AllPersons", query = "select p from Person p")
public class Library {

	@Id
	@GeneratedValue
	private long id;
	@Basic
	private String code;
	@Basic
	private String title;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setCode(String param) {
		this.code = param;
	}

	public String getCode() {
		return code;
	}

	public void setTitle(String param) {
		this.title = param;
	}

	public String getTitle() {
		return title;
	}

}