variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "instance_type" {
  type    = string
  default = "t3.small"
}

variable "instance_name" {
  type    = string
  default = "vihaan-production"
}

variable "key_name" {
  type = string
}

variable "public_key_path" {
  type = string
}