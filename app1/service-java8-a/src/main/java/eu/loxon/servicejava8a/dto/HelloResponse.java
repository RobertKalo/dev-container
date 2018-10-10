package eu.loxon.servicejava8a.dto;

public class HelloResponse {

	private String msg;

	public HelloResponse() {
		super();
	}

	public HelloResponse(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

}
