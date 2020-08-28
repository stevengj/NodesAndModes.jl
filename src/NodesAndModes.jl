module NodesAndModes
using LinearAlgebra
using SpecialFunctions

include("nodes_and_modes_1D.jl")

# export 1D routines by default (there's only one type of element in 1D)
export gauss_lobatto_quad, gauss_quad
export jacobiP, grad_jacobiP

# export 1D vandermonde basis matrix functions by default
export vandermonde_1D, grad_vandermonde_1D

"""
    vandermonde_1D(N, r)

Initialize the 1D Vandermonde matrix of order N Legendre polynomials at nodes r

# Examples
N = 2
r,w = gauss_lobatto_quad(0,0,N)
V = vandermonde_1D(N,r)
```jldoctest
"""
function vandermonde_1D(N, r)
    V1D = zeros(length(r), N+1)
    for j = 1:N+1
        V1D[:,j] = jacobiP(r[:], 0, 0, j-1)
    end
    return V1D
end

"""
    grad_vandermonde_1D(N, r)

Initialize the 1D Vandermonde matrix of order N Legendre polynomials at nodes r

# Examples
N = 2
r,w = gauss_lobatto_quad(0,0,N)
Vr = grad_vandermonde_1D(N,r)
```jldoctest
"""
function grad_vandermonde_1D(N, r)
    V1D = zeros(length(r), N+1)
    for j = 1:N+1
        V1D[:,j] = grad_jacobiP(r[:], 0, 0, j-1)
    end
    return V1D
end

#####
##### Submodule for triangles
#####

module Tri
using DelimitedFiles # to read quadrature node data
include("nodes_and_modes_1D.jl")
include("nodes_and_modes_2D_tri.jl")
export vandermonde_2D, grad_vandermonde_2D
export nodes_2D, equi_nodes_2D, quad_nodes_2D
end


end # module
